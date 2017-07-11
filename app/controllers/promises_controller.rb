class PromisesController < ApplicationController
  before_action :find_promise, only: [:edit, :update, :destroy]

  def index
    @months = {0=>"January", 1=>"February", 2=>"March", 3=>"March", 4=>"May", 5=>"June", 6=>"July", 7=>"August", 8=>"September", 9=>"October", 10=>"November", 11=>"December"}
    @days_in_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    @date = params[:date] ? Date.parse(params[:date]) : Date.today

    if user_signed_in?
      @promises = Promise.where(:user_id => current_user.id)
    end
end

  def new
    @promise = current_user.promises.build
  end

  def create
    @promise = current_user.promises.build(promise_params)
    if @promise.save
      redirect_to root_path
    else
      render 'new'
    end
  end

  def edit
  end
  
 
  def update
    if @promise.update(promise_params)
      redirect_to root_path
    else
      render 'edit'
    end
  end

  def destroy
    @promise.destroy
    redirect_to root_path
  end


  private

    def promise_params
      params.require(:promise).permit(:title)
    end

    def find_promise
      @promise = Promise.find(params[:id])
    end

end
