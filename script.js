const {
    ClassicEditor,
    Essentials,
    Bold,
    Italic,
    Font,
    Paragraph
} = CKEDITOR;

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        licenseKey: license,
        plugins: [ Essentials, Bold, Italic, Font, Paragraph ],
        toolbar: [
            'undo', 'redo', '|', 'bold', 'italic', '|',
            'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor'
        ]
    } )
    .then( /* ... */ )
    .catch( /* ... */ );