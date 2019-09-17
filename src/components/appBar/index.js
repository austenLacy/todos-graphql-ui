import React from 'react'
import MenuIcon from 'react-feather/dist/icons/menu'

import Button from 'components/shared/button'

const AppBar = (props) => {
  const { isSidebarOpen, onSidebarOpenClick } = props

  return (
    <div className="app-bar">
      <div className="ab-left-section">
        <Button
          name="sidebar-burger-menu-btn"
          onClick={() => {
            if (onSidebarOpenClick) {
              onSidebarOpenClick()
            }
          }}
          className={`sidebar-burger-menu-btn ${isSidebarOpen ? 'hidden' : ''}`}
          variant="icon"
          title="Open Sidebar Menu"
        >
          <MenuIcon className="burger-menu-icon" />
        </Button>
      </div>
    </div>
  )
}

export default AppBar
