import './modal.css'

export default function Modal({ children }: any) {
    console.log({children})
    console.log(status)
    return (
        <div className="modal_background">
            <div className='modal_content'>
                {children}
            </div>
        </div>
    )
}