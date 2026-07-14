const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  "https://yrpbrrkgfhjotgigftcq.supabase.co",
  "PASTE_PUBLISHABLE_KEY_MU"
);

(async () => {
  const result = await supabase.auth.signUp({
    email: "tes123456@example.com",
    password: "password123",
  });

  console.log(result);
})();