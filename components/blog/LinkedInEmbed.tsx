"use client"

type LinkedInEmbedProps = {
  url: string
}

export default function LinkedInEmbed({ url }: LinkedInEmbedProps) {
  return (
    <div className="linkedin-embed my-6">
      <!-- Elfsight LinkedIn Feed | Untitled LinkedIn Feed -->
<script src="https://elfsightcdn.com/platform.js" async></script>
<div class="elfsight-app-b3277f97-1791-4f4c-be27-80030301eaa1" data-elfsight-app-lazy></div>
    </div>
  )
}

