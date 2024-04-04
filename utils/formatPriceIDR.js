// It will be available as randomEntry() (camelCase of file name without extension)
export default function (number) {
  return (number / 100).toLocaleString('id-ID')
}