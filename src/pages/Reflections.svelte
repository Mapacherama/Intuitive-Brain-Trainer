<script>
    import { onMount } from "svelte";
  
    // Example prompts (you can replace or fetch dynamically)
    let prompts = [
      { question: "What is one thing you're grateful for today?" },
      { question: "What challenged you recently, and what did you learn from it?" },
      { question: "What is a goal you're currently working toward, and why is it important?" },
      { question: "How do you define success for yourself at this moment?" },
    ];
  
    // User responses
    let responses = new Array(prompts.length).fill("");
  
    // Save responses to localStorage
    const saveResponses = () => {
      localStorage.setItem("reflections", JSON.stringify(responses));
      alert("Your reflections have been saved!");
    };
  
    // Load responses from localStorage on component mount
    const loadResponses = () => {
      const savedResponses = localStorage.getItem("reflections");
      if (savedResponses) {
        responses = JSON.parse(savedResponses);
      }
    };
  
    // Clear all responses
    const clearResponses = () => {
      if (confirm("Are you sure you want to clear all responses?")) {
        responses = new Array(prompts.length).fill("");
        localStorage.removeItem("reflections"); // Clear saved data
      }
    };
  
    // Load saved responses when the component mounts
    onMount(() => {
      loadResponses();
    });
  </script>
  
  <style>
    .reflective-prompts-page {
      max-width: 600px;
      margin: var(--space-lg) auto;
      padding: var(--space-lg);
      background-color: var(--white);
      border-radius: var(--radius);
      box-shadow: var(--shadow-light);
      color: var(--text-dark);
      font-family: var(--font-sans);
    }
  
    .header {
      text-align: center;
      margin-bottom: var(--space-lg);
    }
  
    .header h1 {
      font-size: 2rem;
      color: var(--dark-mint);
      margin-bottom: var(--space-md);
    }
  
    .header p {
      font-size: 1rem;
      color: var(--text-dark);
    }
  
    .prompts-container {
      margin-bottom: var(--space-lg);
    }
  
    .prompt-item {
      margin-bottom: var(--space-lg);
    }
  
    .prompt-question {
      font-size: 1rem;
      font-weight: bold;
      color: var(--dark-mint);
      margin-bottom: var(--space-sm);
      display: block;
    }
  
    textarea {
      width: 100%;
      padding: var(--space-md);
      font-size: 1rem;
      border: 1px solid var(--light-mint);
      border-radius: var(--radius);
      background-color: var(--light-mint);
      color: var(--text-dark);
      resize: none;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    }
  
    textarea:focus {
      border-color: var(--mint-green);
      outline: none;
      background-color: var(--white);
      box-shadow: 0 0 5px rgba(152, 255, 152, 0.7);
    }
  
    .actions {
      text-align: center;
      margin-top: var(--space-lg);
    }
  
    .btn {
      padding: var(--space-sm) var(--space-md);
      font-size: 1rem;
      border: none;
      border-radius: var(--radius);
      cursor: pointer;
      margin: 0 var(--space-md);
      transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }
  
    .save-btn {
      background-color: var(--mint-green);
      color: var(--white);
    }
  
    .save-btn:hover {
      background-color: var(--dark-mint);
    }
  
    .clear-btn {
      background-color: var(--dark-mint);
      color: var(--white);
    }
  
    .clear-btn:hover {
      background-color: var(--mint-green);
    }
  </style>
  
  <div class="reflective-prompts-page">
    <!-- Header Section -->
    <div class="header">
      <h1>Reflective Prompts</h1>
      <p>Take a moment to reflect and grow. Answer the prompts below to gain insights and clarity.</p>
    </div>
  
    <!-- Prompts Section -->
    <div class="prompts-container">
      {#each prompts as prompt, index}
        <div class="prompt-item">
          <label class="prompt-question" for={`reflection-${index}`}>{prompt.question}</label>
          <textarea
            id={`reflection-${index}`}
            bind:value={responses[index]}
            placeholder="Write your thoughts here..."
            rows="4"
          ></textarea>
        </div>
      {/each}
    </div>
  
    <!-- Actions Section -->
    <div class="actions">
      <button class="btn save-btn" on:click={saveResponses}>Save Reflections</button>
      <button class="btn clear-btn" on:click={clearResponses}>Clear All</button>
    </div>
  </div>
  