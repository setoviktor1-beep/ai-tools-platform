# 🚀 SETUP INSTRUKCIJOS - FINIŠUOJAME!

## ✅ KAS JAU PADARYTA:

1. ✅ Visi backend failai sukurti
2. ✅ Supabase integration
3. ✅ Email system
4. ✅ Webhook handler
5. ✅ package.json updated

---

## 📋 KAS DABAR REIKIA PADARYTI (5 MIN):

### **ŽINGSNIS 1: Įdiegti packages** (2 min)

Atidaryk **Command Prompt** arba **PowerShell** ir paleisk:

```bash
cd C:\Users\setov\OneDrive\Documents\my-projects\ai-tools-platform
npm install
```

Turėtų įdiegti:
- @supabase/supabase-js
- resend

---

### **ŽINGSNIS 2: Gauti Resend API Key** (2 min)

1. Eik į: https://resend.com/signup
2. Sign up (nemokamai)
3. Verify email
4. Eik į: https://resend.com/api-keys
5. Spausk **"Create API Key"**
6. Copy API key (prasideda `re_...`)

**Pridėk į Vercel:**
- Eik: https://vercel.com/viktor-setos-projects/ai-tools-platform/settings/environment-variables
- Add new:
  - Key: `RESEND_API_KEY`
  - Value: `re_xxxxxxxxxx` (tavo key)
  - Environment: **All** (Production, Preview, Development)
- Save

---

### **ŽINGSNIS 3: Setup Stripe Webhook** (2 min)

1. Eik į: https://dashboard.stripe.com/webhooks
2. Spausk **"Add endpoint"**
3. Endpoint URL: `https://vpraxis.ink/api/webhooks/stripe`
4. Description: `Product delivery webhook`
5. Events to send:
   - Scroll ir rask: `checkout.session.completed`
   - Pažymėk checkboxą
6. Spausk **"Add endpoint"**
7. **Copy "Signing secret"** (prasideda `whsec_...`)

**Pridėk į Vercel:**
- Eik: https://vercel.com/viktor-setos-projects/ai-tools-platform/settings/environment-variables
- Add new:
  - Key: `STRIPE_WEBHOOK_SECRET`
  - Value: `whsec_xxxxxxxxxx` (tavo secret)
  - Environment: **All**
- Save

---

### **ŽINGSNIS 4: Verify Email Domain Resend** (1 min)

Resend reikia verify domeno:

1. Eik: https://resend.com/domains
2. Spausk **"Add Domain"**
3. Įrašyk: `vpraxis.ink`
4. Jie duos tau DNS records
5. Pridėk juos į Namecheap (kaip anksčiau DNS setup'inai)
6. Wait 5-10 min verification

**ARBA paprasčiau pradžiai:**
- Naudok test email: keisk `lib/email.ts` failą:
  ```typescript
  from: 'Acme <onboarding@resend.dev>' // Test email
  ```

---

### **ŽINGSNIS 5: Push į GitHub** (1 min)

```bash
git add .
git commit -m "Add backend integration: Supabase, Resend, Webhooks"
git push
```

Vercel automatiškai deploy'ins naują versiją!

---

## 🎉 PO TO - TESTUOJAME!

1. Eik į: https://vpraxis.ink/products/linkedin-ghostwriter-pro
2. Spausk **"Buy Now"**
3. Naudok Stripe test card:
   - Card: `4242 4242 4242 4242`
   - Date: bet kokia ateities data
   - CVC: bet kokie 3 skaičiai
   - Email: tavo tikras email
4. Complete purchase
5. **Patikrink savo email** - turėtum gauti download linką! 📧

---

## 🐛 JEI KAS NORS NEVEIKIA:

Check Vercel Logs:
- https://vercel.com/viktor-setos-projects/ai-tools-platform/logs

Check Stripe Webhooks:
- https://dashboard.stripe.com/webhooks
- Matosi ar webhook gavosi delivered

---

## 💡 SVARBU:

Po `npm install` ir `git push` - **viskas veiks automatiškai**:
- Stripe mokėjimas ✅
- Webhook į tavo serverį ✅
- Išsaugo į Supabase ✅
- Nusiunčia email su produktu ✅

**TU GAUNI PINIGUS!** 💰
