using APM.WebAPI.Models;
using APM.WebAPI.Repository;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.OData;

namespace APM.WebAPI.Controllers
{
    [EnableCors(origins: "http://localhost:60662", headers:"*",methods:"*")]
    public class ProductsController : ApiController
    {
        // GET: api/Products
        [EnableQuery]
        public IQueryable<Product> Get()
        {
            var productRepository = new ProductRepository();

            return productRepository.Retrieve().AsQueryable();
        }

      

        // GET: api/Products/5
        public Product Get(int id)
        {
            Product product;
            var repo = new ProductRepository();
            if (id > 0)
            {
                var products = repo.Retrieve();
                product = products.FirstOrDefault(p => p.ProductId == id);
            }
            else
            {
                product = repo.Create();
            }
            return product;
        }

        // POST: api/Products
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Products/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Products/5
        public void Delete(int id)
        {
        }
    }
}
