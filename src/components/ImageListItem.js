

const ImageListItem = ({img}) => {
  return (
    <img src={img.download_url} className="img" alt="img"/>
  )
}

export default ImageListItem