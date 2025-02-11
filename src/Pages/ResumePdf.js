import resumePdf from '../Assets/resume/Resume2025.pdf';

const ResumePdf= () => {
    return (
        <div id='resume'>
    <object data={resumePdf} type="application/pdf" width="100%" height="1250px"> </object>
    hello
    </div>
    )
}

export default ResumePdf;