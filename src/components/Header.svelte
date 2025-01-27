<script>
    import { Link } from "svelte-routing"; // Import the Link component
    export let routes = []; // Accept the routes as a prop
  </script>
  
  <header class="header">
    <nav class="nav">
      <ul class="nav-list">
        {#each routes as { path, component }}
          <li class="nav-item">
            <Link to={path} class="nav-link">{component.name}</Link>
          </li>
        {/each}
      </ul>
    </nav>
  </header>
  
  <style>
    .header {
      background-color: var(--mint-green); /* Mint green for header background */
      color: var(--white); /* White text */
      padding: 16px 32px;
      box-shadow: var(--shadow-light);
    }
  
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .nav-list {
      list-style: none;
      display: flex;
      gap: 24px;
      margin: 0;
      padding: 0;
    }
  
    .nav-item {
      margin: 0;
    }
  
    .nav-link {
      text-decoration: none;
      color: var(--white);
      font-weight: bold;
      font-size: 1rem;
      transition: color 0.3s ease-in-out;
    }
  
    .nav-link:hover {
      color: var(--dark-mint); /* Dark mint green on hover */
    }
  </style>
  