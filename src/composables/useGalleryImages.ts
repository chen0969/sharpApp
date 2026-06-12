import { useIDBKeyval } from '@vueuse/integrations/useIDBKeyval'
import { computed } from 'vue'

// 預設佔位圖
const DEFAULT_SLIDES = [
  { url: 'https://placehold.co/600x400/E63946/FFFFFF', label: 'Page 1' },
  { url: 'https://placehold.co/600x400/2A9D8F/FFFFFF', label: 'Page 2' },
  { url: 'https://placehold.co/600x400/E9C46A/000000', label: 'Page 5' },
]

export function useGalleryImages() {
  const { data: uploadedImages } = useIDBKeyval<string[]>('gallery-images', [])

  // 沒有上傳圖片時顯示預設佔位圖
  const slides = computed(() =>
    uploadedImages.value.length > 0
      ? uploadedImages.value.map((url, i) => ({ url, label: `Photo ${i + 1}` }))
      : DEFAULT_SLIDES
  )

  async function addImage(file: File) {
    const base64 = await toBase64(file)
    uploadedImages.value = [...uploadedImages.value, base64]
  }

  function removeImage(index: number) {
    uploadedImages.value = uploadedImages.value.filter((_, i) => i !== index)
  }

  return { slides, uploadedImages, addImage, removeImage }
}

function toBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}