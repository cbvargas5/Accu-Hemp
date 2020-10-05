import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAgreement } from '../actions/index'
import { Modal, Button } from 'react-bootstrap'


class CustomModal extends Component {
  constructor(props) {
    super(props)
  }

  handleAgree = () => {
    this.props.setAgreement({agreement: true})
  }
  handleShow = () => {
    this.props.setAgreement({agreement: false})
  }
  handleDisagree = () => {
    window.location.replace('https://google.com')
  }
  render() {
    const { agreement } = this.props
    return (
      <div>
      <Modal
        show={!agreement}
        onHide={this.handleAgree}
        backdrop="static"
        keyboard={false}
      >
        <div className="modal-banner">
          User Agreement
        </div>
        <Modal.Header>
          <Modal.Title>
            <h3>Welcome to AccuHemp™!</h3>
            <p>In order to access Accu-Hemp.com you must verify your age and agree to our User Agreement.</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>By clicking “I Agree” you have read, understand, and agree to all of the following:</p>
          <ul>
            <li><strong>1)</strong> You must be at least 18 years old to use AccuHemp ™.</li>
            <li><strong>2)</strong> The statements on AccuHemp ™ have not been evaluated by the Food and Drug Administration (FDA) and are not intended to diagnose, treat, cure or prevent any disease.</li>
            <li><strong>3)</strong> The content on this website/app should not be considered medical advice and we recommend that CBD hemp oil users consult with a medical professional for any medical advice.</li>
            <li><strong>4)</strong> AccuHemp™ is a product of Accugentix LLC, and Accugentix LLC is not responsible or liable for any misuse of content, injury to users, or damages caused by the content on AccuHemp™ and linked external websites.</li>
            <li><strong>5)</strong> Accugentix LLC may earn a small commission when users click on and/or purchase from external websites linked from AccuHemp ™.</li>
            <li><strong>6)</strong> AccuHemp™ uses cookies. Our legal Disclaimers, Privacy Policy, Terms of Use, and Cookie Policy can all be found under the “Legal” tab on the website.</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <Button variant="primary" className="tab-btn" onClick={this.handleAgree}>
              I Agree
            </Button>
            <Button variant="primary" className="tab-btn" onClick={this.handleDisagree}>
              Disagree
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ ...state.home })

export default connect(mapStateToProps, { setAgreement })(CustomModal)
