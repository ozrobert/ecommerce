import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'

export default function Newsletter() {
  return (
    <aside className="flex min-h-[56px] items-center justify-center gap-40 bg-blue-600 py-1 text-white">
      <span className="font-light uppercase tracking-wide">Join our newsletter!</span>
      <form className="flex">
        <input
          className=" w-50 rounded-l py-1 px-3 text-black outline-none focus:w-60"
          type="text"
          placeholder="Enter your e-mail"
        />
        <button
          className="rounded-r bg-neutral-800 py-1.5 px-3 uppercase duration-300 hover:bg-neutral-900"
          type="submit"
        >
          Join Us
        </button>
      </form>
      <div className="space-x-3">
        <button type="button">
          <FacebookIcon />
        </button>
        <button type="button">
          <InstagramIcon />
        </button>
        <button type="button">
          <TwitterIcon />
        </button>
        <button type="button">
          <YouTubeIcon className="hover:opacity-90" />
        </button>
      </div>
    </aside>
  )
}
