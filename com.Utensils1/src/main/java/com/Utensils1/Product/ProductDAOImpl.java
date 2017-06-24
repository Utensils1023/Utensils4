package com.Utensils1.Product;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository

@EnableTransactionManagement
public class ProductDAOImpl implements ProductDAO{

	@Autowired
	SessionFactory sessionfactory;
	
	public void insert(Product p) {
		sessionfactory.getCurrentSession().save(p);
	}

	public void update(Product p) {
		sessionfactory.getCurrentSession().update(p);
	}

	public void delete(int pid) {
		sessionfactory.getCurrentSession().createQuery("delete from Product p where p.id = :ID").setInteger("ID", pid).executeUpdate();
	}

	public List<Product> getProducts() {
		return sessionfactory.getCurrentSession().createQuery("from Product p").list();
	}

	public Product getProduct(int pid) {
		return (Product)sessionfactory.getCurrentSession().createQuery("from Product p where p.id = :ID").setInteger("ID", pid).list().get(0);
	}

	@Transactional
	public Product getProducts(int pId) {
		List<Product> list = sessionfactory.getCurrentSession().createQuery("from Product where Id = :id")
				.setInteger("id", pId).list();
		
		return list.get(0);
		
	}

	public List<Product> getproducts() {
		List<Product> list = sessionfactory.getCurrentSession().createQuery("from Product").list();
		return list;
	}

	@Transactional
	public Product getProductWithMaxId() 
	{
		List<Product> l = sessionfactory.getCurrentSession()
				.createQuery("from Product as p where p.ProductId = ( select max(a.ProductId) from Product as a )")
				.list();

		if (l.size() > 0) {
			return l.get(0);
		} else {
			return null;
		}
	
	}
}

