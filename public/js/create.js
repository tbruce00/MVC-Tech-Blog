const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#post-name').value.trim();
    const content = document.querySelector('#post-content').value.trim();
  
    if (name && content) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ name, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create a new postt');
      }
    }
  };


document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);


