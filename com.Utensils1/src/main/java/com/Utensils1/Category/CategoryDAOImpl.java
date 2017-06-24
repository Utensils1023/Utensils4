package com.Utensils1.Category;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository

@EnableTransactionManagement
public class CategoryDAOImpl implements CategoryDAO{

	@Autowired
	SessionFactory sessionfactory;
	
	public void insert(Category c) {
		sessionfactory.getCurrentSession().save(c);
	}

	public void update(Category c) {
		sessionfactory.getCurrentSession().update(c);
	}

	public void delete(int cid) {
		sessionfactory.getCurrentSession().createQuery("delete from Category c where c.id = :ID").setInteger("ID", cid).executeUpdate();
	}

	public List<Category> getCategorys() {
		return sessionfactory.getCurrentSession().createQuery("from Category c").list();
	}

	public Category getCategory(int cid) {
		return (Category)sessionfactory.getCurrentSession().createQuery("from Category c where c.id = :ID").setInteger("ID", cid).list().get(0);
	}

	@Transactional
	public Category getCategorys(int cId) {
		List<Category> list = sessionfactory.getCurrentSession().createQuery("from Category where Id = :id")
				.setInteger("id", cId).list();
		
		return list.get(0);
		
	}

	public List<Category> getCategorys() {
		List<Category> list = sessionfactory.getCurrentSession().createQuery("from Category").list();
		return list;
	}

	@Transactional
	public Category getCategoryWithMaxId() 
	{
		List<Category> l = sessionfactory.getCurrentSession()
				.createQuery("from Category as c where c.CategoryId = ( select max(a.CategoryId) from Category as a )")
				.list();

		if (l.size() > 0) {
			return l.get(0);
		} else {
			return null;
		}
	
	}
}

