<script>
    const team = [
      {
        name: "Jane Doe",
        role: "Founder & Visionary",
        bio: "Jane is passionate about empowering people to unlock their potential through intuition and self-awareness. With a background in cognitive science and years of mindfulness practice, she envisioned the Intuitive Brain Trainer as a transformative tool for personal growth.",
        photo: "/assets/jane-doe.jpg" // Replace with the actual path
      },
      {
        name: "John Smith",
        role: "Lead Developer",
        bio: "John combines his love for technology and psychology to build apps that make a difference. He’s the mastermind behind the sleek design and seamless functionality of the Intuitive Brain Trainer.",
        photo: "/assets/john-smith.jpg" // Replace with the actual path
      }
    ];
  </script>
  
  <main class="about">
    <section class="hero">
      <h1>About Intuitive Brain Trainer</h1>
      <p>
        At Intuitive Brain Trainer, we believe that intuition is a powerful skill that can be cultivated. Our mission is to help you grow, reflect, and make better decisions by connecting with your inner self.
      </p>
    </section>
  
    <section class="values">
      <h2>Our Mission</h2>
      <p>
        To provide a simple yet effective platform for people to train their intuition, track their growth, and achieve personal breakthroughs.
      </p>
      <h2>Our Approach</h2>
      <p>
        Combining mindfulness techniques, analytics, and gamification, we’ve created a tool that balances reflection and action. The result? A journey of self-discovery that’s engaging and rewarding.
      </p>
    </section>
  
    <section class="team">
      <h2>Meet the Team</h2>
      <div class="team-grid">
        {#each team as member}
          <div class="team-member">
            <img src={member.photo} alt={member.name} class="team-photo" />
            <h3>{member.name}</h3>
            <p class="role">{member.role}</p>
            <p>{member.bio}</p>
          </div>
        {/each}
      </div>
    </section>
  </main>
  
  <style>
    .about {
      padding: var(--space-lg);
      text-align: center;
    }
  
    .hero {
      margin-bottom: var(--space-xl);
    }
  
    h1 {
      color: var(--mint-green);
      font-size: 2.5rem;
      margin-bottom: var(--space-md);
    }
  
    p {
      margin-bottom: var(--space-lg);
      font-size: 1.125rem;
      line-height: 1.6;
      color: var(--text-dark);
    }
  
    .values h2 {
      color: var(--dark-mint);
      font-size: 1.75rem;
      margin-bottom: var(--space-md);
    }
  
    .team {
      margin-top: var(--space-xl);
    }
  
    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--space-lg);
    }
  
    .team-member {
      text-align: center;
      background-color: var(--light-mint);
      border-radius: var(--radius);
      padding: var(--space-md);
      box-shadow: var(--shadow-light);
    }
  
    .team-photo {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: var(--space-sm);
      object-fit: cover;
    }
  
    .role {
      color: var(--dark-mint);
      font-weight: bold;
      margin-bottom: var(--space-sm);
    }
  </style>
  