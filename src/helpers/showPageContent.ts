export default function showPageContent() {
  const loadedClassName = '_loaded';
  if (!document.body.classList.contains(loadedClassName)) {
    document.body.classList.add(loadedClassName);
  }
}
