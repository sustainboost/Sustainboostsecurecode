import axios from 'axios';

// Get CSRF token from Laravel's meta tag
const csrfToken = (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content;

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken || '';
axios.defaults.baseURL = process.env.MIX_APP_URL || 'http://localhost';

// Export the configured Axios instance
export default axios;
