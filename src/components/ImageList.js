import ImageListItem from "./ImageListItem"


const ImageList = ({imgList}) => {
  return (
    <div>
        {imgList.map(img=> {
            return (
            <div key={img.id}>
                <ImageListItem img={img}/>
            </div>
            );
        })}
    </div>
  )
}

export default ImageList