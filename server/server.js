const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors())

// amoCRM konfiguratsiyasi
const AMOCRM_BASE_URL = "https://mainstreamuz.amocrm.ru";
const INTEGRATION_ID = "1ad93f6d-1bdf-439f-9502-5c0b3b416769";
const SECRET_KEY = "aXFq2qvMYMapyIKnlecZZPJc6Z20xahPpf4bMK8rsVIb7Xzr53S3FYbboiAisHqC";
const LONG_TERM_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRjMTAwZTJlMWI0NDBmOGI4MDdkOWM2YmRhYjc0NWY3MWQ1M2MzMjQxYTQwNTZiNmUyMGU0YjUxOGM4MWZiYWEzNGE4MjM0ZWU3YmFjYWFlIn0.eyJhdWQiOiIxYWQ5M2Y2ZC0xYmRmLTQzOWYtOTUwMi01YzBiM2I0MTY3NjkiLCJqdGkiOiJkYzEwMGUyZTFiNDQwZjhiODA3ZDljNmJkYWI3NDVmNzFkNTNjMzI0MWE0MDU2YjZlMjBlNGI1MThjODFmYmFhMzRhODIzNGVlN2JhY2FhZSIsImlhdCI6MTc0NDA2MjQ2NywibmJmIjoxNzQ0MDYyNDY3LCJleHAiOjE3NDU5NzEyMDAsInN1YiI6IjExODAyOTQyIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMyMDc4OTUwLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiZDQyNjM0YzgtNmE5ZS00ZmNjLTllZGEtMjRkZDZmMDZlOThkIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.S976sOoepY0pokiysGyyWQA2TJTygoR30Jkyj8nMw5MfFopm3IW6og_owrNgVtXrUW2MnSZ7isZidRF-CK6y7lFR5RzIazctZCKXLH9ucvfbOp3Y64GkmoDARJU4tKhYVZpglCktAzoa1lMfvcwfAvTOxMyB40wHhIdVK52Sq3WXGE5x5PiOYQdSJQTjxABH9sYuZ9CvXqbBz-7zYVCbVwQjgXDv8A2fGitIN3fXyU9k5KrD4lcq3WUhibA51lzvl118jgc-S0jDXQ6axjsD8RMZrK0YhV7jsZ2p4DsaGhBMKMdJfn6L5F4omdj_N-rhjP-FdUSN6KhXfusZvd-s-A";

app.post("/api/send-to-amocrm", async (req, res) => {
    const { name, phone } = req.body;

    if (!name || !phone) {
        return res.status(400).json({ error: "Ism va telefon raqami kerak." });
    }

    try {
        const response = await axios.post(
            `${AMOCRM_BASE_URL}/api/v4/leads`,
            {
                name: `Yangi mijoz: ${name}`,
                custom_fields_values: [
                    {
                        field_id: "TELEFON_FIELD_ID", // Telefon uchun mos field ID
                        values: [
                            {
                                value: phone,
                            },
                        ],
                    },
                ],
            },
            {
                headers: {
                    Authorization: `Bearer ${LONG_TERM_TOKEN}`,
                    "Content-Type": "application/json",
                },
            }
        );

        res.status(200).json({ success: true, data: response.data });
    } catch (error) {
        console.error("amoCRM API xatosi:", error.response?.data || error.message);
        res.status(500).json({ error: "amoCRM bilan ulanishda xatolik." });
    }
});

app.listen(4000, () => console.log("Server 4000-portda ishlayapti."));
