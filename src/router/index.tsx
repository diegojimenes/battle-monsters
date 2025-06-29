import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "../pages/home";
import { List } from "../pages/list";
import { BattleArea } from "../pages/battleArea";

export const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/battle-area" element={<BattleArea />} />
        </Routes>
    </BrowserRouter>
}

