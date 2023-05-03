import './index.css'

const BannerCard = props => {
  const {bannerCard} = props
  const {headerText, description, className} = bannerCard
  return (
    <li className={className}>
      <div className="inner-container">
        <h1 className="header-text">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="submit">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCard
