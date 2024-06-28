import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json(
    { message: "Yow Wsg What Are u doin in here ??" },
    { status: 200 }
  );
}

export async function POST(req) {
  const { image, email, message, nick } = await req.json();

  const discordwebhook = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK;

  const embedMessage = {
    embeds: [
      {
        title: "Pesan Baru",
        description: `Ada pesan baru nih dari ${nick}`, // Isi pesan
        url: "https://discord.com/users/gtw4613", // URL untuk lebih detail
        color: 3447003, // Warna hex dalam desimal
        fields: [
          { name: "Pengirim", value: nick, inline: true },
          { name: "Email", value: email, inline: true },
          {
            name: "Pesan",
            value: message,
            inline: false,
          },
        ],
        timestamp: new Date().toISOString(),
        footer: {
          icon_url:
            "",
          text: "Dikirim melalui server",
        },
        thumbnail: {
          url:
            image ||
            "",
        },
      },
    ],
  };
  try {
    await axios.post(discordwebhook, embedMessage);
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
