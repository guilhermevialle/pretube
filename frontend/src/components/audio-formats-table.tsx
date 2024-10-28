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

const audioColumns = ['Type', 'Bitrate', 'Size', 'Save']

interface AudioFormatsTableProps {
  audioFormats: AudioFormat[]
}

export default function AudioFormatsTable({
  audioFormats,
}: AudioFormatsTableProps) {
  return (
    <Table removeWrapper aria-label='Audio Formats Table'>
      <TableHeader>
        {audioColumns.map((column) => (
          <TableColumn className='text-center' key={column}>
            {column}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {audioFormats && audioFormats.length > 0 ? (
          audioFormats.map((format, index) => (
            <TableRow key={index}>
              <TableCell className='text-center'>
                <Code color='success'>{format.type}</Code>
              </TableCell>
              <TableCell className='text-center text-zinc-400'>
                {format.bitrate}
              </TableCell>
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
            <TableCell colSpan={audioColumns.length}>
              No audio formats available
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
