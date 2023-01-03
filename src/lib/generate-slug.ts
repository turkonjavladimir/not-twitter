// Generate navigation url while taking into account
// if the user is logged in or not
const generateSlug = (url: string, currentUser: string) =>
  url === "/profile" ? `/profile/${currentUser}` : url;

export default generateSlug;
