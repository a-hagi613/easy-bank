// //Cross-Site Scripting (XSS):

// const userInput = '<script>alert("XSS");</script>';
// //document.write(userInput)
// const output = document.createElement("div");
// output.innerHTML = userInput;
// document.body.appendChild(output);

// // Cross-Site Request Forgery (CSRF):
// const csrfToken = "attacker-crafted-csrf-token";
// const url1 = `https://example.com/api/change-password?newPassword=123456&csrfToken=${csrfToken}`;
// fetch(url, { method: "POST" });

// //Server-Side Request Forgery (SSRF):
// const url2 = "https://attacker-controlled-website.com/secret-data";
// fetch(url)
//   .then(response => response.text())
//   .then(data => console.log(data));

// //Clickjacking:
// const iframe = document.createElement("iframe");
// iframe.src = "https://example.com/evil-page";
// document.body.appendChild(iframe);

// //Insecure Direct Object References (IDOR):
// const userId = 123;
// fetch(`https://example.com/api/user/${userId}`)
//   .then(response => response.json())
//   .then(user => console.log(user));
