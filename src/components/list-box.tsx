import { Select } from '@/components/select'

const ListBox = () => {
  return (
    <Select aria-label="Project status" name="status">
      <option value="active">Active</option>
      <option value="paused">Paused</option>
      <option value="delayed">Delayed</option>
      <option value="canceled">Canceled</option>
    </Select>
  )
}

export default ListBox;