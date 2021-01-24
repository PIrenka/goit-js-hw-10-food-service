const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs ={ 
    input: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
  
}

//============for switching Theme==================
refs.input.addEventListener('change', switchTheme)
function switchTheme(event) { 
    event.preventDefault();
    refs.body.classList.add('light-theme');
    if (event.currentTarget.checked) {
        refs.body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('Theme', Theme.DARK);
    } else {
        refs.body.classList.replace('dark-theme', 'light-theme',);
        localStorage.setItem('Theme', Theme.LIGHT);
    } 
}

//============for saving Theme after switching Theme and reloading the page==================
const saveTheme = localStorage.getItem("Theme");
if (saveTheme === Theme.DARK) { 
    refs.body.classList.add('dark-theme')
    refs.input.checked = true; 
    }