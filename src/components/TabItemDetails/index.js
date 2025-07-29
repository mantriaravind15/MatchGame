import './index.css'

const TabItemDetails = props => {
  const {imagesList, toggleImageUrl} = props
  const {imageUrl, id} = imagesList

  const onClickTabItem = () => {
    toggleImageUrl(id)
  }

  return (
    <li>
      <button className="btn" type="button" onClick={onClickTabItem}>
        <img className="image-url" src={imageUrl} alt="thumbnail url" />
      </button>
    </li>
  )
}

export default TabItemDetails
