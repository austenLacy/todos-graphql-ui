import React from 'react'
import ArrowLeftIcon from 'react-feather/dist/icons/arrow-left'

import Button from 'components/shared/button'

const Sidebar = (props) => {
  const { isOpen, onCloseClick = () => {} } = props

  return (
    <div className={`sidebar ${isOpen ? '' : 'sidebar-collapsed'}`}>
      <div className="sidebar-header">
        <h3>
          Not Todoist
        </h3>
        <Button
          name="collapse-sidebar-btn"
          onClick={() => onCloseClick(false)}
          variant="icon"
          className="collapse-sidebar-btn"
          title="Collapse Sidebar"
        >
          <ArrowLeftIcon className="arrow-left-icon" />
        </Button>
      </div>
      <div className="sidebar-main-content">
      </div>
    </div>
  )
}

export default Sidebar
