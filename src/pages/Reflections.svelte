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
      max-width: 500px;
      margin: 2rem auto;
      padding: 2rem;
      background-color: #333;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      color: white;
      font-family: 'Arial', sans-serif;
    }
  
    .header {
      text-align: center;
      margin-bottom: 2rem;
    }
  
    .header h1 {
      font-size: 1.8rem;
      color: #e53e3e;
    }
  
    .header p {
      font-size: 1rem;
      color: #ccc;
    }
  
    .prompts-container {
      margin-bottom: 2rem;
    }
  
    .prompt-item {
      margin-bottom: 1.5rem;
    }
  
    .prompt-question {
      font-size: 0.9rem;
      font-weight: bold;
      color: #e53e3e;
      margin-bottom: 0.5rem;
      display: block;
    }
  
    textarea {
      width: 100%;
      padding: 10px;
      font-size: 1rem;
      border: 1px solid #e53e3e;
      border-radius: 5px;
      background-color: #222;
      color: #fff;
      resize: none;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
    }
  
    textarea:focus {
      border-color: #f56565;
      outline: none;
      box-shadow: 0 0 5px rgba(229, 62, 62, 0.7);
    }
  
    .actions {
      text-align: center;
    }
  
    .btn {
      padding: 10px 20px;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin: 0 10px;
      transition: background-color 0.3s ease;
    }
  
    .save-btn {
      background-color: #4caf50;
      color: white;
    }
  
    .save-btn:hover {
      background-color: #45a049;
    }
  
    .clear-btn {
      background-color: #e53e3e;
      color: white;
    }
  
    .clear-btn:hover {
      background-color: #c53030;
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
  