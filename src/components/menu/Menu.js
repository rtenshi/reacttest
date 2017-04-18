import React from 'react'
import { Nav, NavItem, Glyphicon } from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'
import { connect } from 'react-redux'

/**
 * Menu Component
 */
export class Menu extends React.Component
{

  logged() {
    return(
      <Nav bsStyle="tabs">
        <IndexLinkContainer to="/">
          <NavItem><Glyphicon glyph="home"/></NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/admin">
          <NavItem><Glyphicon glyph="lock"/> Admin </NavItem>
        </LinkContainer>
        <LinkContainer to="/logout">
          <NavItem><Glyphicon glyph="log-out"/></NavItem>
        </LinkContainer>
      </Nav>
    )
  }
  notLogged() {
    return(
      <Nav bsStyle="tabs">
        <IndexLinkContainer to="/">
          <NavItem><Glyphicon glyph="home"/></NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/login">
          <NavItem>Login</NavItem>
        </LinkContainer>
      </Nav>
    )
  }
  /**
   * Render
   * @returns {XML}
   */
  render() {
    if (this.props.adminStatus.checked) {
      return this.logged()
    } else {
      return this.notLogged()
    }

  }
}
function mapStateToProps (state) {
  return {
    adminStatus: state.admin
  }
}
export default connect(mapStateToProps)(Menu)