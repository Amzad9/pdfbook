import PropTypes from 'prop-types'

function PageHeader({pageTitle, className}) {
  return (
     <div>
      <h1 className={`text-6xl ` + className}>{pageTitle}</h1>
     </div>
  )
}

PageHeader.propTypes = {
  pageTitle: PropTypes.string,
  className: PropTypes.string
};

export default PageHeader