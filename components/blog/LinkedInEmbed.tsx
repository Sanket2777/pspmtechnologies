"use client"

type LinkedInEmbedProps = {
  url: string
}

export default function LinkedInEmbed({ url }: LinkedInEmbedProps) {
  return (
    <div className="linkedin-embed my-6">
      <iframe
        src={url}
        height="500"
        width="504"
        frameBorder="0"
        allowFullScreen
        title="LinkedIn Post"
        className="w-full max-w-[504px] mx-auto rounded-xl shadow-lg"
      ></iframe>
    </div>
  )
}

