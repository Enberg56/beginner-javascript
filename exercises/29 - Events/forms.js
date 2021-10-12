const wes = document.querySelector('.wes');

wes.addEventListener('click', function (event) {
  const shouldChangePage = confirm('This website might screw you over');
  console.log('You clicked it');

  if (!shouldChangePage) {
    event.preventDefault();
  }
  console.log(shouldChangePage);
});
const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function (event) {
  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('Sorry bruh');
    event.preventDefault();
  }
});
