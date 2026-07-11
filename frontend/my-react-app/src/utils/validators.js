/**
 * Step 1: Validates that a riddle submission is not empty or pure spaces.
 */
export const validateAnswer = (answer) => {
  if (!answer || answer.trim().length === 0) {
    return {
      isValid: false,
      message: "Your answer can't be empty! Give it your best guess."
    };
  }
  return { isValid: true, message: "" };
};

/**
 * Step 2: Validates display names / usernames for leaderboard or profile setups.
 */
export const validateUsername = (username) => {
  if (!username || username.trim().length === 0) {
    return {
      isValid: false,
      message: "Please enter a nickname before playing."
    };
  }
  
  const cleanUsername = username.trim();
  if (cleanUsername.length < 3 || cleanUsername.length > 15) {
    return {
      isValid: false,
      message: "Your nickname must be between 3 and 15 characters long."
    };
  }
  
  return { isValid: true, message: "" };
};

/**
 * Step 2 (Continued): Validates custom slider settings or game numeric preferences.
 */
export const validateRiddleCountPreference = (count) => {
  const num = Number(count);
  if (isNaN(num) || num < 1 || num > 20) {
    return {
      isValid: false,
      message: "You can set your round preference between 1 and 20 riddles at a time."
    };
  }
  return { isValid: true, message: "" };
};