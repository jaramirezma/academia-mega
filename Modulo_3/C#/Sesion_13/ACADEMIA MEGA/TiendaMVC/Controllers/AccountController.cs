using Microsoft.AspNetCore.Mvc;
using TiendaMVC.Services;
using TiendaMVC.Models;

namespace TiendaMVC.Controllers
{
    public class AccountController : Controller
    {
        private readonly ApiClient _api;

        public AccountController(ApiClient api) => _api = api;

        [HttpGet]
        public IActionResult Login() => View();


        [HttpPost]
        public async Task<IActionResult> Login(User user)
        {
            if (!ModelState.IsValid) return View(user);

            var valido = await _api.LoginAsync(user);
            if (!valido)
            {
                ModelState.AddModelError("", "Usuario o contraseña no válidos");
                return View(user);
            }

            return RedirectToAction("Index", "Productos");
        }

        [HttpGet]
        public IActionResult Register() => View();

        [HttpPost]
        public async Task<IActionResult> Register(User user)
        {
            if (!ModelState.IsValid) return View(user);

            var valido = await _api.RegisterAsync(user);
            if (!valido)
            {
                ModelState.AddModelError("", "Usuario ya registrado");
                return View(user);
            }

            return RedirectToAction("Index", "Productos");
        }

        public IActionResult Logout()
        {
            HttpContext.Session.Remove("JWToken");
            return RedirectToAction("Login");
        }
    }
}