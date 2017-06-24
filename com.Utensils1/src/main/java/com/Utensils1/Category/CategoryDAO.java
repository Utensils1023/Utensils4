package com.Utensils1.Category;

import java.util.List;

import com.Utensils1.Category.Category;

public interface CategoryDAO {

	void insert(Category c);
	void update(Category c);
	void delete(int cid);
	
	List<Category> getCategory();
	Category getCategory(int cid);
	public Category getCategoryWithMaxId();
	
	
}
