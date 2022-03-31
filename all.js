Quill.register('modules/imageUploader', ImageUploader);

const toolbarOptions = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
  ['link', 'image'],

  ['clean'],
];

const quill = new Quill('#description', {
  theme: 'snow',
  modules: {
    imageResize: {
      displaySize: true,
    },
    toolbar: {
      container: toolbarOptions,
      handlers: {
        image: imageHandler,
      },
    },
  },
  placeholder: '寫下產品描述',
});

function imageHandler() {
  let range = this.quill.getSelection();
  let value = prompt('please copy paste the image url here.');
  if (value) {
    this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER);
  }
}
