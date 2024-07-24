'use client'

import { OurFileRouter } from '@/app/api/uploadthing/core'

import '@uploadthing/react/styles.css'
import { UploadDropzone } from '@/lib/uploadthing'
import Image from 'next/image'
import { X } from 'lucide-react'

interface FileUploadProps {
   onChange: (url?: string) => void
   value: string
   endpoint: keyof OurFileRouter
}

export const FileUpload = (props: FileUploadProps) => {
   const { endpoint, value, onChange } = props
   const fileType = value?.split('.').pop()

   if (value && fileType !== 'pdf') {
      return (
         <div className="relative h-20 w-20">
            <Image src={value} alt="Upload" fill className="rounded-full" />
            <button
               type="button"
               onClick={() => onChange('')}
               className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
            >
               <X className="h-4 w-4" />
            </button>
         </div>
      )
   }

   return (
      <UploadDropzone
         endpoint={endpoint}
         onClientUploadComplete={(res) => onChange(res?.[0].url)}
         onUploadError={(error: Error) => console.log(error)}
      />
   )
}
