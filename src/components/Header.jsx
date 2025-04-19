import React from 'react';

function Header() {
  return (
    <header className="flex flex-col items-center justify-center py-8 bg-gradient-to-r from-red-600 to-orange-500 text-white animate-flicker">
      <img
        src="https://scontent.ftuc4-1.fna.fbcdn.net/v/t39.30808-6/488602115_28967388989574197_2891596475570408463_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH7BUmtPpFQqacx5OeFpDYLHXvNSmrdSHgde81Kat1IeKqg5ghak_DbwhivpZK8AFL2uAGO6ODKrP6-W30cMVnl&_nc_ohc=BKdYx-Ar4EoQ7kNvwFpKVVT&_nc_oc=AdnEo0-mG0VZoMSGMpLcb4fPlkPU17KFHI1aBUaAbrGi2h3hggEWmMplZk3Lb26HAr93fXtqZkAzLZQ9oxBytzGM&_nc_zt=23&_nc_ht=scontent.ftuc4-1.fna&_nc_gid=NBiSiMkEEj-I_Sz5fRpQVA&oh=00_AfHgCFvgzTDyh3X6-me3gWTZkpUlKw1qYkGjmMelHBb1bQ&oe=6808DCFD"
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-orange-600 hover:scale-110 transition-transform duration-300"
      />
      <h1 className="text-4xl font-bold text-yellow-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
        Juan Daniel Morales
      </h1>
    </header>
  );
}

export default Header;