<script>
    import { Link } from "svelte-routing";
</script>

<header class="header">
    <nav class="nav">
        <div class="logo">
            <Link to="/" class="logo-link">
                <!-- You can add your logo/icon here -->
                <span class="logo-text">Your Brand</span>
            </Link>
        </div>
        <ul class="nav-list">
            <li class="nav-item">
                <Link to="/" class="nav-link">Home</Link>
            </li>
            <li class="nav-item">
                <Link to="/about" class="nav-link">About</Link>
            </li>
        </ul>
    </nav>
</header>

<style>
    .header {
        background-color: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        padding: 16px 32px;
        position: sticky;
        top: 0;
        z-index: 100;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  
    .nav {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-size: 1.5rem;
    }

    .logo-link {
        text-decoration: none;
        color: #000;
    }

    .logo-text {
        font-weight: 500;
        letter-spacing: -0.5px;
    }
  
    .nav-list {
        list-style: none;
        display: flex;
        gap: 32px;
        margin: 0;
        padding: 0;
    }
  
    .nav-item {
        margin: 0;
    }
  
    .nav-link {
        text-decoration: none;
        color: #666;
        font-weight: 400;
        font-size: 0.9rem;
        transition: all 0.2s ease;
        padding: 8px 0;
        position: relative;
    }
  
    .nav-link:hover {
        color: #000;
    }

    .nav-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #000;
        transform: scaleX(0);
        transition: transform 0.2s ease;
    }

    .nav-link:hover::after {
        transform: scaleX(1);
    }

    @media (max-width: 768px) {
        .header {
            padding: 12px 16px;
        }

        .nav-list {
            gap: 16px;
        }
    }
</style>
  