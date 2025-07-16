export function searchImages(q) {
  const params = new URLSearchParams({
    key: '29490885-39aa37afc891f3eb40eae4912',
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`https://pixabay.com/api/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
