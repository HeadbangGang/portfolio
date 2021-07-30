import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap'
import { pdfjs, Document, Page } from 'react-pdf'
import resumePdf from './resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${ pdfjs.version }/pdf.worker.min.js`
import './resume-modal.less'

export const ResumeModal = (props) => {

    ResumeModal.propTypes ={
        onHide: PropTypes.bool,
    }

    return(
        <Modal
            { ...props }
            size="lg"
            centered
            backdrop="static"
        >
            <Modal.Header>
                <Modal.Title>
        Tayden Flitcroftʼs Resume
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Document file={ resumePdf }>
                    <Page pageNumber={ 1 } />
                </Document>
            </Modal.Body>
            <Modal.Footer>
                <a href={ resumePdf } download="Flitcroft_Tayden_Resume">Download Resume</a>
                <Button variant="secondary" onClick={ props.onHide }>Close</Button>
            </Modal.Footer>
        </Modal>
    )


}

export default ResumeModal