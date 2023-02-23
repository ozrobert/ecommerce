import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

type Props = {
  message: string
  type: 'success' | 'error'
}

export default function Toast({ message, type }: Props) {
  const [showToast, setShowToast] = useState(true)

  const handleClose = () => {
    setShowToast(false)
  }

  const bgColor =
    // eslint-disable-next-line no-nested-ternary
    type === 'success' ? 'bg-green-600' : type === 'error' ? 'bg-red-600' : 'bg-blue-600'

  return (
    <div>
      {showToast && (
        <div
          className={`flex items-center justify-center py-2  text-lg uppercase text-white ${bgColor}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="w-full text-center">{message}</div>
          <button className="mr-2 self-end" type="button" aria-label="Close" onClick={handleClose}>
            <CloseIcon fontSize="large" />
          </button>
        </div>
      )}
    </div>
  )
}
