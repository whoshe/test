import { parseISO, format, formatDistanceToNow } from 'date-fns'
import { ko } from 'date-fns/locale'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString}>
      {format(date, 'PPP EEE', { locale: ko })}
      {/* {formatDistance(new Date(date), new Date(), {
        addSuffix: true,
        locale: ko,
      })} */}
    </time>
  )
}
