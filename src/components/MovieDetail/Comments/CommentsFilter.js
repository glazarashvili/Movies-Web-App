import { Select } from 'antd'

const { Option } = Select

function handleChange(value) {
  console.log(`selected ${value}`)
}

const CommentsFilter = () => {
  return (
    <Select
      defaultValue='Newest'
      style={{ width: 120 }}
      onChange={handleChange}>
      <Option value='Newest'>Newest</Option>
      <Option value='Oldest'>Oldest</Option>
    </Select>
  )
}

export default CommentsFilter
