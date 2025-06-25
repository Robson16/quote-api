# Quote API
---

## **Overview**

This project is a small **Express.js** web API designed to store and serve different quotes about computers, coding, and technology.

## **Features**

* **Quote serving:** The API returns random quotes in **JSON** format.
* **Simple and lightweight:** Ideal for projects that need a quick and straightforward endpoint for quotes.

## **Getting Started**

Follow the instructions below to set up and run the **`quote-api`** on your local machine.

### **Prerequisites**

Make sure you have **Node.js** and **npm** (or **yarn**) installed on your computer. If you need help installing Node.js, you can refer to the [article on installing Node](https://www.codecademy.com/articles/installing-node).

### **Installation**

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/Robson16/quote-api.git](https://github.com/Robson16/quote-api.git)
    cd quote-api
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

### **Usage**

1.  **Start the API in development mode:**

    ```bash
    npm run dev
    ```

    This will start the server with **Nodemon**, which automatically restarts upon file changes. You'll be working in `server.js` in a text editor of your choice.

2.  **Start the API in production mode:**

    ```bash
    npm start
    ```

    This will start the server using **Node.js**.

3.  **Access the API:**

    The API will be running at `http://localhost:4001`.

## **Endpoints**

* **`GET /`**

    Returns a random quote in **JSON**.

    **Example response:**

    ```json
    {
      "quote": "The city’s central computer told you?  R2D2, you know better than to trust a strange computer!",
      "person": "C-3PO"
    },
    ```

## **Technologies Used**

* **Node.js**: A **JavaScript** runtime environment.
* **Express**: A web framework for **Node.js**.
* **Nodemon**: A development tool that automatically restarts the server.

## **License**

This project is licensed under the **MIT License**. See the [LICENSE](https://opensource.org/licenses/MIT) file for more details.

---
Made with ❤️ by **Robson16**.