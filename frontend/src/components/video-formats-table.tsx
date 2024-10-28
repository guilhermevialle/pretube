import { formatUnit } from '@/utils/format-unit'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@nextui-org/button'
import { Code } from '@nextui-org/code'
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/table'

const videoColumns = ['Type', 'Resolution', 'Size', 'Save']

interface VideoFormatsTableProps {
  videoFormats: VideoFormat[]
}

export default function VideoFormatsTable({
  videoFormats,
}: VideoFormatsTableProps) {
  return (
    <Table removeWrapper aria-label='Video Formats Table'>
      <TableHeader>
        {videoColumns.map((column) => (
          <TableColumn className='text-center' key={column}>
            {column}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {videoFormats && videoFormats.length > 0 ? (
          videoFormats.map((format, index) => (
            <TableRow key={index}>
              <TableCell className='text-center'>
                <Code color='success'>{format.type}</Code>
              </TableCell>
              <TableCell className='text-center'>{format.resolution}</TableCell>
              <TableCell className='text-center'>
                <Code color='default'>{formatUnit(format.size)}</Code>
              </TableCell>
              <TableCell className='text-center'>
                <Button color='primary' size='sm' variant='ghost'>
                  <FontAwesomeIcon icon={faArrowDown} />
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={videoColumns.length}>
              No video formats available
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
